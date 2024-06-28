import React from "react";
import ProductList from "../../components/ProductList";
import FavoritesList from "../../components/FavoritesList";

const LandingSection: React.FC = () => {
  return (
    <>
      <div className=" block ">
        <table>
          <tbody>
            <tr className="">
              <td>
                <ProductList />
              </td>
            </tr>
            
          </tbody>
        </table>

        <FavoritesList />
      </div>
    </>
  );
};

export default LandingSection;
