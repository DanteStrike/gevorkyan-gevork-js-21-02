import React, {FormEvent} from "react";
import './Filters.css';
import {Filter, FilterProps} from "../filter/Filter";
import withMixin from "../../hocs/with-mixin";


const WithMixinFilter = withMixin(Filter, [`filters__filter`]);

type FiltersProps = {
  filters?: Array<FilterProps>
  action?: string,
  onFilterChange?: (form: FormData) => void
}

const Filters = (
  {
    action = `#`,
    filters = [],
    onFilterChange = () => {}
  }: FiltersProps
) => {
  return (
    <section className="filters">
      <h2 className="filters__name">Фильтры</h2>
      <form
        className="filters__form"
        method="get"
        action={action}
        onSubmit={(evt: FormEvent<HTMLFormElement>) => {
          evt.preventDefault();
          const formData = new FormData(evt.target as HTMLFormElement)
          onFilterChange(formData);
        }}
      >
        {filters.map((filter, index) => <WithMixinFilter {...filter} key={index}/>)}
        <button className="filters__button" type="submit">Отфильтровать</button>
      </form>
    </section>
  );
}


export default Filters;
