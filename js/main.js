class EquationResult{
    x = 1;
    y = 1;
    toString() {
        return `(${this.x}; ${this.y})`;
    }
    constructor(x, y){
        this.x= x;
        this.y = y;
    }
}

class Equation{
    A = 1;
    B = 1;
    C = 1;
    constructor(a, b, c){
        this.A = a;
        this.B = b;
        this.C = c;
    }
    static result(a, b)
        {
            var plusA = new Equation(a.A*b.A, a.B*b.A, a.C*b.A);
            var plusB = new Equation(a.A * b.A *-1, b.B * a.A * -1, b.C * a.A * -1);
            var y = (plusA.A + plusB.A + plusA.C + plusB.C) / (plusA.B+plusB.B);
            return new EquationResult(a.B >= 0? (a.C - y)/a.A : (a.C + y) / a.A, y);
        }
    static Result(a, b){
        if (a.A / b.A == a.B / b.B && a.B / b.B != a.C / b.C)
            return "немає ∅";
        else if (a.A / b.A == a.B / b.B && a.B / b.B == a.C / b.C)
            return "безліч ∞";
        var q =  Equation.result(a, b);
        return q.toString();
    }
}

$("#ok").click(function () { 
    var a = new Equation(parseFloat($("#r1").children("#a").val()), parseFloat($("#r1").children("#b").val()), parseFloat($("#r1").children("#c").val()));
    var b = new Equation(parseFloat($("#r2").children("#a").val()), parseFloat($("#r2").children("#b").val()), parseFloat($("#r2").children("#c").val()));
    alert(Equation.Result(a, b));
});