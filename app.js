const car = (name, model, owner, year, phone, image) => ({
  name,
  model,
  owner,
  year,
  phone,
  image,
});

const log = (text, type, date = new Date()) => ({ text, type, date });

const cars = [
  car("Ford", "Focus", "Макс", 2015, "+7 921 44 53 98", "images/focus.jpg"),
  car("Ford", "Mondeo", "Егор", 2016, "+7 921 64 54 89", "images/mondeo.jpg"),
  car(
    "Porshe",
    "panamera",
    "Николай",
    2010,
    "+7 921 54 54 59",
    "images/panamera.jpg"
  ),
];

new Vue({
  el: "#app",
  data: {
    cars: cars,
    car: cars[0],
    selectedCarIndex: 0,
    phoneVisibility: false,
    modalVisibility: false,
    search: "",
    logs: [],
  },
  methods: {
    selectCar(index) {
      this.car = this.filtredCars[index];
      this.selectedCarIndex = index;
    },
    newOrder() {
      this.modalVisibility = false;
      this.logs.push(
        log(`Success order ${this.car.name} - ${this.car.model}`, "ok")
      );
    },
    cancelOrder() {
      this.modalVisibility = false;
      this.logs.push(
        log(`Cancelled order ${this.car.name} - ${this.car.model}`, "cnl")
      );
    },
  },
  computed: {
    phoneBtnTexr() {
      return this.phoneVisibility ? "Hide phone" : "Show phone";
    },
    filtredCars() {
      return this.cars.filter(
        (car) =>
          car.name.toLowerCase().includes(this.search.toLowerCase()) ||
          car.model.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
  filters: {
    date(value) {
      return value.toLocaleString();
    },
  },
});
