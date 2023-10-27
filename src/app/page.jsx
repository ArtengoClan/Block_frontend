import Featured from "@/components/featured/Featured";
import sl from "./homepage.module.css";
import CategoryList from "@/components/CategoryList/CategoryList";
import CardList from "@/components/CardList/CardList";
import Menu from "@/components/Menu/Menu";

export default function Home() {
  return (
    <div className={sl.container}>
      <Featured />
      <CategoryList />
      <div className={sl.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  ); 
}
