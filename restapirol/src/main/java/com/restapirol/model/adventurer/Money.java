package com.restapirol.model.adventurer;

public class Money {
    private int goldCoin;
    private int silverCoin;
    private int copperCoin;

    public Money() {
    }

    public Money(int goldCoin, int silverCoin, int copperCoin) {
        this.goldCoin = goldCoin;
        this.silverCoin = silverCoin;
        this.copperCoin = copperCoin;
    }

    public int getGoldCoin() {
        return goldCoin;
    }

    public void setGoldCoin(int goldCoin) {
        this.goldCoin = goldCoin;
    }

    public int getSilverCoin() {
        return silverCoin;
    }

    public void setSilverCoin(int silverCoin) {
        this.silverCoin = silverCoin;
    }

    public int getCopperCoin() {
        return copperCoin;
    }

    public void setCopperCoin(int copperCoin) {
        this.copperCoin = copperCoin;
    }
    
}
