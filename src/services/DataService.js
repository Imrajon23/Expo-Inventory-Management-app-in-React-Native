import { db } from '../config/db';
import { Actions } from 'react-native-router-flux';

export const addStudent =  (name, matricno, major, year) => {
    db.ref('/Product').child(matricno).set({
        name: name,
        matricno: matricno,
        major: major,
        year: year,
        
    }, () => Actions.HomeScreen());
}

export const updateStudent =  (name, matricno, major, year) => {
    db.ref('/Product').child(matricno).update({
        name: name,
        matricno: matricno,
        major: major,
        year: year,
        
    }, () => Actions.HomeScreen());
}

export const removeStudent =  (matricno) => {
    db.ref('/Product').child(matricno).remove();
    Actions.HomeScreen();
}