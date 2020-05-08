/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
        let cnt1 = 0, cnt2 = 0;
        let num1 = coordinates[0][0] - coordinates[1][0];
        let num2 = coordinates[0][1] - coordinates[1][1];
        let num3 = num2/num1;
        let num4, num5, m;
        for(let i=1;i<coordinates.length-1;i++)
        {
            num4 = coordinates[i][0] - coordinates[i+1][0];
            num5 = coordinates[i][1] - coordinates[i+1][1];
            m = num5/num4;
            if(m!=num3)
            {
                return false;
            }
        }
        return true;
};
