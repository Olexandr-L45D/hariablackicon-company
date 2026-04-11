// ValveDetails.module.css
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import css from "./ValveDetails.module.css";
import { GoArrowLeft } from "react-icons/go";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";

const ValveDetails = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const items = useSelector(state => state.campers.items);

  const valve = items.find(item => String(item.id) === id);

  if (!valve) return <p>No characteristics found valve </p>;
  //new constant isValidValue
  const isValidValue = value => {
    return value !== null && value !== undefined && value !== "";
  };

  // objects= Array
  const fields = [
    // весь блок - масив 26 значень!
    { key: "Size", label: t("valvedetails.Size") },
    { key: "Function_Principle", label: t("valvedetails.FunctionPrinciple") },
    { key: "Advantages", label: t("valvedetails.Advantages") },
    { key: "Nominal_pressure", label: t("valvedetails.NominalPr") },
    { key: "Operating_pressure", label: t("valvedetails.OperatingPr") },
    { key: "Minimum_open_pressure", label: t("valvedetails.MinimumOpPr") },
    { key: "Control_pressure", label: t("valvedetails.Control_pressure") },
    { key: "Applicable_medium", label: t("valvedetails.Applicable_medium") },
    { key: "Applicable_fluid", label: t("valvedetails.Applicable_fluid") },
    { key: "Control_medium", label: t("valvedetails.Control_medium") },
    { key: "Control_fluid", label: t("valvedetails.Control_fluid") },
    { key: "Medium_temperature", label: t("valvedetails.Medium_temperature") },
    { key: "Fluid_temperature", label: t("valvedetails.Fluid_temperature") },
    {
      key: "Ambient_temperature",
      label: t("valvedetails.Ambient_temperature"),
    },
    { key: "Seal_material", label: t("valvedetails.Seal_material") },
    {
      key: "Seal_ring_and_packing_material",
      label: t("valvedetails.Seal_R_P_material"),
    },
    { key: "Disc_material", label: t("valvedetails.Disc_material") },
    { key: "Actuator_material", label: t("valvedetails.Actuator_material") },
    { key: "Ball_material", label: t("valvedetails.Ball_material") },
    { key: "Body_material", label: t("valvedetails.Body_material") },
    { key: "Cylinder_material", label: t("valvedetails.Cylinder_material") },
    { key: "Control_type", label: t("valvedetails.Control_type") },
    { key: "Connection_type", label: t("valvedetails.Connection_type") },
    { key: "Flange_standards", label: t("valvedetails.Flange_standards") },
    { key: "Structure_lenght", label: t("valvedetails.Structure_lenght") },
    { key: "Leakage_class", label: t("valvedetails.Leakage_class") },
  ];
  // filters for map
  const filteredFields = fields.filter(field => isValidValue(valve[field.key]));

  const allArrayFields = filteredFields.slice(0, 27);

  return (
    <container className={css.containerList}>
      <h1 className={css.titles}>{valve.name}</h1>
      <section key={valve.id} className={css.cartItem}>
        <figure className={css.imgCard}>
          <img className={css.images} src={valve.photo} alt={valve.name} />
        </figure>

        <section className={css.cartContainer}>
          <ul className={css.cartComent}>
            {allArrayFields.map(field => (
              <li key={field.key} className={css.descrip}>
                <strong>{field.label}:&nbsp;</strong>
                {valve[field.key]}
              </li>
            ))}
          </ul>
        </section>
      </section>

      <button className={css.buttonIcon}>
        <GoArrowLeft className={css.icons} />
        <NavLink className={css.linkGo} to="/catalog">
          {t("navigation.go_Catalog")}
        </NavLink>
      </button>
      <section className={css.containerSecind}>
        <h2 className={css.titleDescr}>{t("catalog.description")}</h2>
        <h3 className={css.schemeTitle}>
          <strong className={css.schemeTitle}></strong>
          {valve.subtitle}
        </h3>
        <p className={css.moreDescrip}>{valve.description}</p>
        <h2 className={css.schemeTitle}>{t("catalog.scheme")}</h2>
        <figure className={css.imgCheme}>
          <img className={css.imag} src={valve.scheme} alt={valve.scheme} />
        </figure>
        <h2 className={css.schemeTitle}>{t("catalog.table")}</h2>
        <figure className={css.imgCheme}>
          <img className={css.imag} src={valve.table} alt={valve.table} />
        </figure>
      </section>
      <ScrollToTopButton />
    </container>
  );
};

export default ValveDetails;

// <ul className={css.cartComent}>
//   <li className={css.descrip}>
//     <strong>{t("valvedetails.Size")}:&nbsp;</strong>
//     {valve.Size}
//   </li>
//   <li className={css.descrip}>
//     <strong>{t("valvedetails.FunctionPrinciple")}:&nbsp;</strong>
//     {valve.Function_Principle}
//   </li>
//   <li className={css.descrip}>
//     <strong>{t("valvedetails.Advantages")}:&nbsp;</strong>
//     {valve.Advantages}
//   </li>
//   <li className={css.descrip}>
//     <strong>{t("valvedetails.NominalPr")}:&nbsp;</strong>
//     {valve.Nominal_pressure}
//   </li>
//   <li className={css.descrip}>
//     <strong>{t("valvedetails.OperatingPr")}:&nbsp;</strong>
//     {valve.Operating_pressure}
//   </li>
//   <li className={css.descrip}>
//     <strong>{t("valvedetails.MinimumOpPr")}:&nbsp;</strong>
//     {valve.Minimum_open_pressure}
//   </li>
//   <li className={css.descrip}>
//     <strong>{t("valvedetails.Control_pressure")}:&nbsp;</strong>
//     {valve.Control_pressure}
//   </li>
//   <li className={css.descrip}>
//     <strong>{t("valvedetails.Applicable_medium")}:&nbsp;</strong>
//     {valve.Applicable_medium}
//   </li>
//   <li className={css.descrip}>
//     <strong>{t("valvedetails.Applicable_fluid")}:&nbsp;</strong>
//     {valve.Applicable_fluid}
//   </li>
//   <li className={css.descrip}>
//     <strong>{t("valvedetails.Control_medium")}:&nbsp;</strong>
//     {valve.Control_medium}
//   </li>
//   {/*залишаю рядків с права від зображення і переношу */}
// </ul>;

// <section className={css.cartContainerBottom}>
//   <ul className={css.cartComentBottom}>
//     {/*залишаю по 8 в блоку і переношу */}
//     <li className={css.descrip}>
//       <strong>{t("valvedetails.Control_fluid")}:&nbsp;</strong>
//       {valve.Control_fluid}
//     </li>
//     <li className={css.descrip}>
//       <strong>{t("valvedetails.Medium_temperature")}:&nbsp;</strong>
//       {valve.Medium_temperature}
//     </li>
//     <li className={css.descrip}>
//       <strong>{t("valvedetails.Fluid_temperature")}:&nbsp;</strong>
//       {valve.Fluid_temperature}
//     </li>
//     <li className={css.descrip}>
//       <strong>{t("valvedetails.Ambient_temperature")}:&nbsp;</strong>
//       {valve.Ambient_temperature}
//     </li>
//     <li className={css.descrip}>
//       <strong>{t("valvedetails.Seal_material")}:&nbsp;</strong>
//       {valve.Seal_material}
//     </li>
//     <li className={css.descrip}>
//       <strong>{t("valvedetails.Seal_R_P_material")}:&nbsp;</strong>
//       {valve.Seal_ring_and_packing_material}
//     </li>
//     <li className={css.descrip}>
//       <strong>{t("valvedetails.Disc_material")}:&nbsp;</strong>
//       {valve.Disc_material}
//     </li>
//     <li className={css.descrip}>
//       <strong>{t("valvedetails.Actuator_material")}:&nbsp; </strong>
//       {valve.Actuator_material}
//     </li>
//   </ul>
//   {/* переношу на другий ряд */}
//   <ul className={css.cartComentBottom}>
//     <li className={css.descrip}>
//       <strong>{t("valvedetails.Ball_material")}:&nbsp; </strong>
//       {valve.Ball_material}
//     </li>
//     <li className={css.descrip}>
//       <strong>{t("valvedetails.Body_material")}:&nbsp; </strong>
//       {valve.Body_material}
//     </li>
//     <li className={css.descrip}>
//       <strong>{t("valvedetails.Cylinder_material")}:&nbsp; </strong>
//       {valve.Cylinder_material}
//     </li>
//     <li className={css.descrip}>
//       <strong>{t("valvedetails.Control_type")}:&nbsp; </strong>
//       {valve.Control_type}
//     </li>
//     <li className={css.descrip}>
//       <strong>{t("valvedetails.Connection_type")}:&nbsp; </strong>
//       {valve.Connection_type}
//     </li>
//     <li className={css.descrip}>
//       <strong>{t("valvedetails.Flange_standards")}:&nbsp; </strong>
//       {valve.Flange_standards}
//     </li>
//     <li className={css.descrip}>
//       <strong>{t("valvedetails.Structure_lenght")}:&nbsp; </strong>
//       {valve.Structure_lenght}
//     </li>
//     <li className={css.descrip}>
//       <strong>{t("valvedetails.Leakage_class")}:&nbsp; </strong>
//       {valve.Leakage_class}
//     </li>
//   </ul>
// </section>;
