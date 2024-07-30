import imgGrosor from '../assets/designGuide/00_grosor_rev1 1.png';
import imgCalidad from '../assets/designGuide/00_calidad_rev1 1.png';
import imgPuntosFragiles from '../assets/designGuide/00_puntos-fragiles 1.png';
import imgPuntosModelos from '../assets/designGuide/00_tolerancias_rev1 1.png';
import imgSoportes from '../assets/designGuide/00_soportes 1.png';
import imgBase from '../assets/designGuide/00_base 1.png';
import imgMoviles from '../assets/designGuide/Group 114.png';
import imgEmsamblaje from '../assets/designGuide/00_ensamblaje_rev1 1.png';
import imgGrabados from '../assets/designGuide/00_grabados 1.png';
import imgRoscas from '../assets/designGuide/00_roscas 1.png';

function InfoDesigGuide() {
  const paragraphs = {
    text1: 'El grosor espesor de la pared es la distancia/ que hay entre una superficie del modelo y la superficie opuesta contigua. Para obtener un buen resultado y un producto resistente, es recomendable que este grosor no sea inferior a 1 mm.',
    text2: 'La manera en la que se imprima el modelo condiciona varias de sus características, una de ellas su calidad superficial. Esto se debe a que el modelo se imprime capa a capa, por lo que la orientación de la pieza a la hora de su impresión determinará su calidad superficial. La misma pieza impresa con diferente orientación tendrá distinto acabado. Un ejemplo de esto se puede observar en la anterior imagen. A la izquierda, impresa de forma horizontal se nota más el efecto escalera del proceso de impresión. Sin embargo, a la derecha se muestra la misma pieza impresa de forma vertical, de manera que su calidad superficial será mayor. Es necesario pensar qué superficie necesita tener el mejor acabado y elegir la orientación de impresión acorde a esto.',
    text3: 'En todo modelo impreso habrá zonas algo más débiles debido a la orientación de la impresión. Estas zonas pueden provocar roturas en los elementos externos delgados del diseño. Por tanto, es importante evitar partes en el modelo que sean paralelas a la base y que requieran soportes para sostenerlas.',
    text4: 'La precisión dimensional no está relacionada con el detalle del modelo sino con la desviación respecto del tamaño nominal. La tolerancia general del material es 0,1% con un mínimo de ± 200 µ. Este aspecto puede estar influido por el material que usamos o la velocidad de impresión. En tal caso es importante saber qué tolerancia necesitamos para no invertir ni más ni menos tiempo y dinero del requerido en el proceso de impresión.',
    text5: 'Los soportes son estructuras que se imprimen junto al modelo pero que no son parte del diseño original y sirven para soportar las partes que sobresalen del modelo que exceden 45º. Como no forman parte del modelo real, las eliminamos una vez que se haya completado la impresión. Por lo general, los voladizos de hasta 45 grados pueden imprimirse sin perder calidad. Esto se debe a que cada nueva capa tiene suficiente soporte para permanecer intacta y hacer posible la impresión. Sin embargo, cualquier cosa que pase los 45 grados se acerca a la horizontal y se vuelve difícil de imprimir. Dichos voladizos son propensos a curvarse o caerse, por lo que nosotros mismos añadimos estos soportes en las piezas, para después eliminarlos. El uso de estos soportes provoca que el acabado superficial sea más rugoso.',
    text6: 'La primera capa es la que dará la estabilidad necesaria al modelo, por lo que esta deberá ser lo más plana posible para que tenga más superficie de agarre. Considerando esto habrá que tener en cuenta que la superficie inferior será más dura que el resto del modelo.',
    text7: 'Cuando se diseña un producto con partes móviles, el espacio entre las superficies es crucial. El espaciado determinará la flexibilidad o la capacidad para combarse del diseño. Se recomienda dejar un espacio mínimo de 0,3mm entre las superficies.',
    text8: 'Cuando se diseñan modelos que necesitan ser ensamblados es importante dejar suficiente distancia entre las partes que irán unidas. Un encaje perfecto con el software CAD no implica un perfecto encaje en la impresión porque el software ignora la fricción existente realmente. Por ello, siempre será recomendable dejar al menos 0,3 mm entre las diferentes partes.',
    text9: 'Normalmente es preferible que los detalles sean grabados a que estén en relieve. Para detalles grabados se recomiendan letras con un grosor de línea mínimo de 1 mm y una profundidad de 0,3 mm. Para detalles en relieve se recomienda un grosor de línea de al menos 2,5 mm y una profundidad de al menos 0,5 mm.',
    text0: 'Muchas veces nuestros diseños están formados por varias piezas que se unirán una vez impresas. Hay que tener en cuenta que existen diferencias entre lo que se diseña y lo que se imprime, pues obtener una tolerancia 0 en el mundo físico es imposible. Existen ciertos valores de tolerancia que son aceptables y no afectan al funcionamiento de la pieza diseñada.Para la realización de roscados y tornillos, una tolerancia adecuada sería 0.25 mm. Además, la distancia del paso de rosca deberá ser como mínimo de 3 mm para asegurar un buen resultado final.'
  }
  return (
    <aside className="py-10">
      <div className="w-[749px] py-[13px] flex flex-col gap-16">
        {[
          ['Grosor de pared', imgGrosor, paragraphs.text1],
          ['Calidad de la superficie y orientación de impresión', imgCalidad, paragraphs.text2],
          ['Puntos frágiles', imgPuntosFragiles, paragraphs.text3],
          ['Precisión del modelo', imgPuntosModelos, paragraphs.text4],
          ['Soportes', imgSoportes, paragraphs.text5],
          ['Base', imgBase, paragraphs.text6],
          ['Partes móviles', imgMoviles, paragraphs.text7],
          ['Ensamblaje', imgEmsamblaje, paragraphs.text8],
          ['Detalles grabados y en relieve', imgGrabados, paragraphs.text9],
          ['Roscas', imgRoscas, paragraphs.text0]
        ].map(([title, img, text], i) => (
          <section key={i}>
            <h1 id={title} className="text-left text-neutral-50 text-2xl font-semibold leading-[28.80px]">{title}</h1>
            <img src={img} alt={title} className="my-6" />
            <p className="text-left w-[706px]">{text}</p>
          </section>
        ))}
      </div>
    </aside>
  )
}

export default InfoDesigGuide