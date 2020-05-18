export const cpMixin = {
  methods: {
    borrow(count) {
      this.money -= count;
    },
    giveMoney(count) {
      this.money -= count;
      this.$parent.money += count;
    },
  },
};
