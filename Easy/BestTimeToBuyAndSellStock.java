// Given a number of integers, find out the most potential profits that could be made on a linear trading day

class BestTimeToSellAndBuyStock {
  public static void main(String[] args) {
    int[] prices = {7,1,5,3,6,4}; // Output 7 = Buy on day 2 and sell on day 3, buy on day 4 and sell on day 5

    for(int i = 0; i < prices.length; i++) {
      for(int j = i + 1; j < prices.length; j++) {
        if(prices[i] < prices[j]) {
          System.out.println("Buy on day " + i + " and sell on day " + j);
        }
      }
    }
  }
}