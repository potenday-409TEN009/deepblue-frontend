import { FC } from "react";

import { pointFormatting } from "../../utils/formatting";
import polarPointImg from "../../assets/images/small-polar-point-icon.svg";

import crown1Img from "../../assets/images/rank/crown1.svg";
import crown2Img from "../../assets/images/rank/crown2.svg";
import crown3Img from "../../assets/images/rank/crown3.svg";

type UserInRankingProps = {
  ranking: number;
  nickname: string;
  level: number;
  score: number;
};

const UserInRanking: FC<UserInRankingProps> = ({
  ranking,
  nickname,
  level,
  score,
}) => {
  let rankingContent: JSX.Element;

  if (ranking === 1) {
    rankingContent = <img src={crown1Img} />;
  } else if (ranking === 2) {
    rankingContent = <img src={crown2Img} />;
  } else if (ranking === 3) {
    rankingContent = <img src={crown3Img} />;
  } else {
    rankingContent = (
      <div className="body2 text-navy-600 w-7 text-center">{ranking}</div>
    );
  }

  return (
    <li className="flex flex-row items-center">
      {rankingContent}
      <div className="caption2 text-navy-300 w-36 text-center">{nickname}</div>
      <div className="text-navy-100 w-[60px] text-center">Lv{level}</div>
      <div className="text-navy-100 flex flex-row w-28 gap-2 justify-start items-center">
        <img src={polarPointImg} className="-mb-1" />
        {pointFormatting(score)}
      </div>
    </li>
  );
};

export default UserInRanking;
