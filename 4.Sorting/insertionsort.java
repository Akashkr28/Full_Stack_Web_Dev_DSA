public class insertionsort {
    public static void insertionSort(int[] arr) {
        for (int i = 1; i < arr.length; i++) {
            int element = arr[i];
            int j;
            for(j = i - 1; j >= 0; j--) {
                if(arr[j] > element) {
                    arr[j+1] = arr[j];
                } else {
                    // arr[j] <= element
                    break;
                }
            }
            arr[j+1] = element;
        }
    }
    public static void main(String[] args) {
        int[] arr = {5,4,3,2,1,3};
        insertionSort(arr);
        for(int i : arr) {
            System.out.println(i);
        } 
    }
}