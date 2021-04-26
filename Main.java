class Main {
    public static void main(String[] args) {
        Integer[] list = { 1, 2, 3, 4, 5, 10, 12, 2 };
        System.out.println("" + maximum(list));
        System.out.println(printNumberInWordIfElse(2));
        System.out.println(printNumberInWordSwitch(3));
        checkOddEven(2);
        checkOddEven(3);
        System.out.println("" + average(list));
    }

    public static Integer maximum(Integer[] numList) {
        int max = 0;

        for (int i = 0; i < numList.length; i++) {
            if (numList[i] > max)
                max = numList[i];
        }

        return max;
    }

    public static String printNumberInWordIfElse(int num) {
        if (num == 1)
            return "ONE";
        else if (num == 2)
            return "TWO";
        else if (num == 3)
            return "THREE";
        else if (num == 4)
            return "FOUR";
        else if (num == 5)
            return "FIVE";
        else if (num == 6)
            return "SIX";
        else if (num == 7)
            return "SEVEN";
        else if (num == 8)
            return "EIGHT";
        else if (num == 9)
            return "NINE";
        else
            return "NaN";
    }

    public static String printNumberInWordSwitch(int num) {
        switch (num) {
        case 1:
            return "ONE";
        case 2:
            return "TWO";
        case 3:
            return "THREE";
        case 4:
            return "FOUR";
        case 5:
            return "FIVE";
        case 6:
            return "SIX";
        case 7:
            return "SEVEN";
        case 8:
            return "EIGHT";
        case 9:
            return "NINE";
        default:
            return "NaN";
        }
    }

    public static void checkOddEven(int num) {
        if (num % 2 == 0)
            System.out.println("Even Number");
        else
            System.out.println("Odd Number");
    }

    public static double average(Integer[] numList) {
        int sum = 0;
        for (int i = 0; i < numList.length; i++) {
            sum += numList[i];
        }
        return sum / numList.length;
    }
}