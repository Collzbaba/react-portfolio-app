import CV from '../../assets/Blessed_Adodo_Tech_Resume.pdf'
import '../../style/Resume.css'

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn btn-secondary">
        Download CV
      </a>
      {/* <a href='#contact' className='btn btn-primary'>Let's Talk</a> */}
    </div>
  );
}

export default CTA;
