
/*

Unidades de peso
1 tonelada
1 quintal
1 miriagramo
1 kilogramo
1 hectogramo
1 decagramo
1 gramo
1 decigramo
1 centigramo
1 miligramo
*/

export default function convertMe(pvalor, punidad, pdestino){
  let v = pvalor;
  let fusion = punidad + pdestino

  switch (fusion) {
    case 'mgcg': //Miligramos
      return result = v / 10; break;
    case 'mgdg':
      return result = v / 100; break;
    case 'mgg':
      return result = v / 1000; break;
    case 'mgdag':
      return result = v / 10000; break;
    case 'mghg':
      return result = v / 100000; break;
    case 'mgkg':
      return result = v / 1000000; break;
    case 'mgmag':
      return result = v / 10000000; break;
    case 'mgq':
      return result = v / 100000000; break;
    case 'mgt':
      return result = v / 1000000000; break;

    case 'cgmg': //Centigramos
      return result = v * 10; break;
    case 'cgdg':
      return result = v / 10; break;
    case 'cgg':
      return result = v / 100; break;
    case 'cgdag':
      return result = v / 1000; break;
    case 'cghg':
      return result = v / 10000; break;
    case 'cgkg':
      return result = v / 100000; break;
    case 'cgmag':
      return result = v / 1000000; break;
    case 'cgq':
      return result = v / 10000000; break;
    case 'cgt':
      return result = v / 100000000; break;


    case 'dgmg': //Decigramos
      return result = v * 100; break;
    case 'dgcg':
      return result = v * 10; break;
    case 'dgg':
      return result = v / 10; break;
    case 'dgdag':
      return result = v / 100; break;
    case 'dghg':
      return result = v / 1000; break;
    case 'dgkg':
      return result = v / 10000; break;
    case 'dgmag':
      return result = v / 100000; break;
    case 'dgq':
      return result = v / 1000000; break;
    case 'dgt':
      return result = v / 10000000; break;

    case 'gmg': //Gramos
      return result = v * 1000; break;
    case 'gcg':
      return result = v * 100; break;
    case 'gdg':
      return result = v * 10; break;
    case 'gdag':
      return result = v / 10; break;
    case 'ghg':
      return result = v / 100; break;
    case 'gkg':
      return result = v / 1000; break;
    case 'gmag':
      return result = v / 10000; break;
    case 'gq':
      return result = v / 100000; break;
    case 'gt':
      return result = v / 1000000; break;

    case 'dagmg': //Decagramo
      return result = v * 10000; break;
    case 'dagcg':
      return result = v * 1000; break;
    case 'dagdg':
      return result = v * 100; break;
    case 'dagg':
      return result = v * 10; break;
    case 'daghg':
      return result = v / 10; break;
    case 'dagkg':
      return result = v / 100; break;
    case 'dagmag':
      return result = v / 1000; break;
    case 'dagq':
      return result = v / 10000; break;
    case 'dagt':
      return result = v / 100000; break;

    case 'hgmg': //Hectogramo
      return result = v * 100000; break;
    case 'hgcg':
      return result = v * 10000; break;
    case 'hgdg':
      return result = v * 1000; break;
    case 'hgg':
      return result = v * 100; break;
    case 'hgdag':
      return result = v * 10; break;
    case 'hgkg':
      return result = v / 10; break;
    case 'hgmag':
      return result = v / 100; break;
    case 'hgq':
      return result = v / 1000; break;
    case 'hgt':
      return result = v / 10000; break;

    case 'kgmg': //Kilogramo
      return result = v * 1000000; break;
    case 'kgcg':
      return result = v * 100000; break;
    case 'kgdg':
      return result = v * 10000; break;
    case 'kgg':
      return result = v * 1000; break;
    case 'kgdag':
      return result = v * 100; break;
    case 'kghg':
      return result = v * 10; break;
    case 'kgmag':
      return result = v / 10; break;
    case 'kgq':
      return result = v / 100; break;
    case 'kgt':
      return result = v / 1000; break;

    case 'magmg': //Miriagramo
      return result = v * 10000000; break;
    case 'magcg':
      return result = v * 1000000; break;
    case 'magdg':
      return result = v * 100000; break;
    case 'magg':
      return result = v * 10000; break;
    case 'magdag':
      return result = v * 1000; break;
    case 'maghg':
      return result = v * 100; break;
    case 'magkg':
      return result = v * 10; break;
    case 'magq':
      return result = v / 10; break;
    case 'magt':
      return result = v / 100; break;

    case 'qmg': //Quintal
      return result = v * 100000000; break;
    case 'qcg':
      return result = v * 10000000; break;
    case 'qdg':
      return result = v * 1000000; break;
    case 'qg':
      return result = v * 100000; break;
    case 'qdag':
      return result = v * 10000; break;
    case 'qhg':
      return result = v * 1000; break;
    case 'qkg':
      return result = v * 100; break;
    case 'qmag':
      return result = v * 10; break;
    case 'qt':
      return result = v / 10; break;

    case 'tmg': //Tonelada
      return result = v * 1000000000; break;
    case 'tcg':
      return result = v * 100000000; break;
    case 'tdg':
      return result = v * 10000000; break;
    case 'tg':
      return result = v * 1000000; break;
    case 'tdag':
      return result = v * 100000; break;
    case 'thg':
      return result = v * 10000; break;
    case 'tkg':
      return result = v * 1000; break;
    case 'tmag':
      return result = v * 100; break;
    case 'tq':
      return result = v * 10; break;
    }
  }
