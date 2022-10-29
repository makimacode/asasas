import {addDoc,collection,getDocs,query,where,documentId, writeBatch, } from 'firebase/firestore'
import { db } from '../../services/firestore';

export const saveOrder = async(cart,orderObj,clearCart)=>{
    try {
            
        const ids = cart.map(c => c.id);
        const productRef = collection(db,'products');
        const batch = writeBatch(db);
        const outOfStock = [];

        const {docs} = await getDocs(query(productRef,where(documentId(),'in',ids)));

        docs.forEach(doc => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock

        const productAddedToCart = cart.find(c => c.id === doc.id);
        const prodQuantity = productAddedToCart?.quantity

        if(stockDb >= prodQuantity){
            console.log('llego')
            batch.update(doc.ref,{stock: stockDb - prodQuantity});
        }else{
            outOfStock.push({id: doc.id, ...dataDoc});
        }

        })

        if(outOfStock.length === 0){
            const orderRef = collection(db,'orders');
            const orderAdd = await addDoc(orderRef, orderObj);
            // const resp = await saveOrder(cart,orderObj,clearCart)
            // if(resp) alertConfirm('La compra fue realizada con exitó');
      
            batch.commit();
            clearCart();
            return true
        }else{
            return outOfStock
        }

    } catch (error) {
  
    }   
}