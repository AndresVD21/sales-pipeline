import { Emoji, Space } from '@sales-pipeline/shared';
import { useNavigate } from 'react-router-dom';
import './sales-pipeline-feature-home.scss';

/* eslint-disable-next-line */
export interface SalesPipelineFeatureHomeProps {}

export const SalesPipelineFeatureHome: React.FC<
  SalesPipelineFeatureHomeProps
> = (props: SalesPipelineFeatureHomeProps) => {
  const navigate = useNavigate();

  const goToConvert = () => {
    navigate('/convert');
  };

  return (
    <main className="container home-container">
      <h1 className="container__title">Welcome to Sales Pipeline!</h1>
      <section className="introduction">
        <p className="introduction__text">
          Hi! Start the process to convert prospects below
          <Space />
          <Emoji emoji="👇🏾" label="hand pointing down" />
        </p>
        <button className="introduction__button" onClick={goToConvert}>
          Go To Convert
        </button>
      </section>
    </main>
  );
};

export default SalesPipelineFeatureHome;
