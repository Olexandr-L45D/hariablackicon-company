import css from "./VentPageFilters.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllTruck } from "../../redux/campers/operations";
import { selectPage } from "../../redux/campers/selectors";
import Loader from "../../components/Loader/Loader";
import { selectFilters } from "../../redux/filters/selectors";
import { useSearchParams } from "react-router-dom";
import { setChangeFilter } from "../../redux/filters/slice";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton";
import CatalogGallary from "../../components/CatalogGallary/CatalogGallary";
import i18n from "../../../i18n.js";

export default function VentPageFilters() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.campers.loading);
  const filteres = useSelector(selectFilters);
  const page = useSelector(selectPage);
  const [params, setParams] = useSearchParams();

  // Об'єднаний useEffect
  useEffect(() => {
    const existingFilters = Object.fromEntries(params.entries());
    // Якщо URL містить параметри, а Redux-параметри порожні
    if (!Object.keys(filteres).length && Object.keys(existingFilters).length) {
      console.log("Initializing Redux with existing filters:", existingFilters);

      dispatch(setChangeFilter({ category: "" })); // Синхронізація Redux з URL { category: "" }
      return;
    }
    // Оновлення URL при зміні фільтрів
    const newParams = new URLSearchParams(params.toString());
    Object.entries(filteres).forEach(([key, value]) => {
      if (value) newParams.set(key, value);
      else newParams.delete(key);
    });

    if (newParams.toString() !== params.toString()) {
      console.log("Updated URL params:", newParams.toString());
      setParams(newParams);
      console.log("URL Params:", params);
    }
  }, [params, filteres, dispatch, setParams]);

  // Завантаження товарів версія - яка працює наразі
  useEffect(() => {
    if (page === 1) {
      dispatch(fetchAllTruck({ page }));
    }
  }, [dispatch, page, filteres]);
  // новий useEffect для перезавантаження галереї при сміні мови
  useEffect(() => {
    const onLangChange = () => {
      dispatch(fetchAllTruck({ page: 1 }));
    };

    i18n.on("languageChanged", onLangChange);

    return () => {
      i18n.off("languageChanged", onLangChange);
    };
  }, [dispatch]);

  return (
    <section className={css.cartAll}>
      {isLoading ? <Loader /> : <CatalogGallary />}
      <ScrollToTopButton />
    </section>
  );
}
