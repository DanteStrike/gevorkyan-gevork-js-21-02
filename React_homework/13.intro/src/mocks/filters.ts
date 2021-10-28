type FiltersMock = Array<{
  title: string,
  type: "checkbox" | "radio",
  name: string,
  items: Array<string>
}>

export const filtersMock: FiltersMock = [
  {
    title: `Морская рыба`,
    type: `checkbox`,
    name: `sea-fish`,
    items: [`Акула`, `Окунь`, `Палтус`, `Треска`]
  },{
    title: `Пресноводная рыба`,
    type: `checkbox`,
    name: `freshwater-fish`,
    items: [`Белоглазка`, `Осётр`, `Речной угорь`, `Налим`]
  }
];
