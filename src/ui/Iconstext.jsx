import PropTypes from 'prop-types';

const Iconstext = ({
  img,
  title,
  text,
  containerClassName = '',
  imgClassName = '',
  titleClassName = '',
  textClassName = '',
}) => {
  return (
    <div className={containerClassName}>
      <img
        src={img}
        alt=""
        loading="lazy"
        className={`w-8 h-8 ${imgClassName}`}
      />
      <p
        className={`font-bold text-[32px] py-2 text-text-header text-base tracking-tight ${titleClassName}`}
      >
        {title}
      </p>
      <p className={`text-base text-text-light ${textClassName}`}>{text}</p>
    </div>
  );
};

Iconstext.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  containerClassName: PropTypes.string,
  imgClassName: PropTypes.string,
  titleClassName: PropTypes.string,
  textClassName: PropTypes.string,
};

export default Iconstext;
