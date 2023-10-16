import { setProductList } from "./productSlice";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config/firebaseConfig";
import { toast } from "react-toastify";
import {TBL_PRODUCT} from '../../utils/constant'

export const fetchProductsAction = () => async (dispatch) => {
  try {
    const querySnapshot = await getDocs(collection(db, TBL_PRODUCT));
    const productList = [];
    querySnapshot.forEach((doc) => {
      const slug = doc.id;
      const data = doc.data();
      productList.push({
        ...data,
        slug,
      });
    });
    dispatch(setProductList(productList));
  } catch (e) {
    toast.error(e.message);
  }
};
