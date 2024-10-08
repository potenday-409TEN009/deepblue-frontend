import { FC } from "react";
import { useNavigate } from "react-router-dom";

import OnboardingLayout from "../../components/layout/OnboardingLayout";
import Button from "../../components/buttons/Button";
import greetingPolarImg from "../../assets/images/onboarding/hi-polar.svg";

const GreetingPage: FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/tutorial/questions/0");
  };

  return (
    <OnboardingLayout withBackArrow>
      <div className="flex flex-col justify-center h-full mb-24 gap-2">
        <h3 className="title3 text-navy-100 text-left">
          반가워요!
          <br />
          당신의 상태를 진단하고 <br />
          맞춤형 퀘스트를 제공해 드릴게요!
        </h3>
        <img src={greetingPolarImg} />
      </div>
      <Button onClick={handleClick} isOnboarding>
        다음
      </Button>
    </OnboardingLayout>
  );
};

export default GreetingPage;
