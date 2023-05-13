import styles from "./MealList.module.css";
import dummyMeals from "../Data/dummyMeals";
import Card from "@/app/componenets/UI/Card";
import MealItem from "@/app/componenets/Meals/MealItem/MealItem";

const MealList = () => {
  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          {dummyMeals.map((meal) => (
            <MealItem key={meal.id} {...meal}/>
          ))}
        </ul>
      </Card>
    </section>
  );
};
export default MealList;
