
function pascal(total) {
    let triangle = [];
    while (triangle.length < total) {
        if (triangle.length > 0) {
            let line = [];
            for (let i = 0; i < triangle.length; i++) {
                if (typeof triangle[triangle.length - 1][i - 1] === 'undefined') {
                    line.push(1);
                } else {
                    line.push((triangle[triangle.length - 1][i - 1] + triangle[triangle.length - 1][i]));
                }
            }
            line.push(1);
            triangle.push(line);
        } else {
            triangle.push([1]);
        }
    }
    return triangle;
}

console.log(pascal(10));