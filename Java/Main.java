interface Payment {
    void processPayment(double amount);
    void refundPayment(double amount);
}

interface Verification {
    boolean verifyUser(String userId);
}

abstract class OnlinePayment implements Payment, Verification {
    protected String userId;

    public OnlinePayment(String userId) {
        this.userId = userId;
    }

    @Override
    public boolean verifyUser(String userId) {
        return this.userId.equals(userId);
    }
}

class CreditCardPayment extends OnlinePayment {
    public CreditCardPayment(String userId) {
        super(userId);
    }

    @Override
    public void processPayment(double amount) {
        if(verifyUser(this.userId)) {
            System.out.println("Processing credit card oaymenet of $" + amount);
        } else {
            System.out.println("User verification failed");
        }
    }

    @Override
    public void refundPayment(double amount) {
        System.out.println("Refunding credit card payment of $" + amount);
    }
}

class PayPalPayment extends OnlinePayment {
    public PayPalPayment(String userId) {
        super(userId);
    }

    @Override
    public void processPayment(double amount) {
        if(verifyUser(this.userId)) {
            System.out.println("Processing PayPal payment of $" + amount);
        } else {
            System.out.println("User verification failed");
        }
    }

    @Override
    public void refundPayment(double amount) {
        System.out.println("Refunding PayPal payment of $ " + amount);
    }
}

public class Main {
    public static void main(String[] args) {
        Payment creditCardPayment = new CreditCardPayment("user123");
        creditCardPayment.processPayment(100.0);
        creditCardPayment.refundPayment(50.0);

        Payment payPalPayment = new PayPalPayment("user123");
        payPalPayment.processPayment(200.0);
        payPalPayment.refundPayment(100.0);
    }
}