abstract class Shape {
    abstract double area(); 
}

class Rectangle extends Shape {
    private double length;
    private double width;

    public Rectangle(double length, double width) {
        this.length = length;
        this.width = width;
    }

    @Override
    double area() {
        return this.length * this.width;
    }
}

class Circle extends Shape {
    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    @Override
    double area() {
        return Math.PI * radius * radius;
    }
}

class AreaCalculator {
    public void calculateArea(Shape shape) {
        System.out.println(shape.area());
    }
}

class CalculateArea {
    public static void main(String[] args) {
        Rectangle rectangle = new Rectangle(12.0, 23.0);
        Circle circle = new Circle(3.4);
        AreaCalculator AC = new AreaCalculator();
        AC.calculateArea(rectangle);
        AC.calculateArea(circle);
    }
}