import info from '../data/informacion';
import { default as mision } from '../data/mision';
import styles from '../estilos-componentes/SobreNosaotros.module.css';
import Card from './Targeta';

export default function SobreNosotros() {
  const misionList = mision.map((m) => {
    return <Card name={m.name} description={m.description} />;
  });

  const infoList = info.map((i) => {
    return <Card name={i.title} description={i.text} />;
  });

  return (
    <>
      <div className={styles.Acercaprincipal}>
        <div className={styles.tit}>¡ACERCA DE NOSOTROS!</div>
        <div className={styles.informacion11}>
          <p>
            En TradeTrove, estamos comprometidos a brindarte una experiencia excepcional en el mundo de las inversiones
            en acciones. Nuestra plataforma se ha desarrollado con la misión de democratizar el acceso a las
            oportunidades de inversión global, permitiéndote invertir de manera inteligente y segura, independientemente
            de tu nivel de experiencia.
          </p>
        </div>
        <div className={styles.contenedorT}>
          <div className={styles.mision}>{misionList}</div>
          <div className={styles.infor}>{infoList}</div>
        </div>
        <div className={styles.informacion1}>
          <p>
            Únete a la Comunidad de TradeTrove Descubre por qué miles de inversores confian en TradeTrove para alcanzar
            sus metas financieras. Regístrate ahora y comienza tu viaje de inversión con nosotros
          </p>
        </div>
      </div>
    </>
  );
}
