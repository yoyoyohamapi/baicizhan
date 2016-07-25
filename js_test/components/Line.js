import React from 'react';
import classnames from 'classnames';

const Line = (props) => {
    // 获得线的点
    const { points } = props;
    const length = points.length;
    const lines = points.reduce((lines, point, index) => {
        if(index === length-1){
            return lines;
        }

        // 获得当前及下一个点的坐标, 以确定出一条线段
        const [currentPointX, currentPointY] = point;
        const [nextPointX, nextPointY] = points[index+1];



        let line = {
            left: currentPointX > nextPointX ? nextPointX : currentPointX,
            top: currentPointY > nextPointY ? nextPointY : currentPointY
        };

        // 确定线段的横纵
        if(currentPointY === nextPointY) {
            // 横线
            line['width'] = Math.abs(nextPointX - currentPointX);
        } else if(currentPointX === nextPointX) {
            // 纵线
            line['height'] = Math.abs(nextPointY - currentPointY);
        }
        lines.push(line);
        return lines;
    }, []);

    return (
        <div className="lines">
            {lines.map((line, index) =>
                <div
                    key={index}
                    className={classnames('line', {'vertical': line.height, 'horizontal': line.width})}
                    style={line}
                >
                </div>
            )}
        </div>
    )
};

export default Line;