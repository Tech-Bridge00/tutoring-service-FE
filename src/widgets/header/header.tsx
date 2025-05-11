import { useNavigate } from "react-router";
import ArrowLeft from "../../assets/arrowLeft.svg?react";
import Faq from "../../assets/faq.svg?react";
import Alarm from "../../assets/alarm.svg?react";

type HeaderProps = {
  title: string;
  showBackButton?: boolean;
  showAlarmButton?: boolean;
  showFaqButton?: boolean;
  onBackClick?: () => void;
  onAlarmClick?: () => void;
  onFaqClick?: () => void;
};

/**
 * Header component
 * @param title - 헤더 제목
 * @param showBackButton - 뒤로가기 버튼 표시 여부
 * @param showAlarmButton - 알람 버튼 표시 여부
 * @param showFaqButton - FAQ 버튼 표시 여부
 * @param onBackClick - 뒤로가기 버튼 callback function, 없으면 뒤로가기
 * @param onAlarmClick - 알람 버튼 callback function, 없으면 알람 페이지로 이동
 * @param onFaqClick - FAQ 버튼 callback function, 없으면 FAQ 페이지로 이동
 */
export default function Header({
  title,
  showBackButton = true,
  showAlarmButton = true,
  showFaqButton = true,
  onBackClick,
  onAlarmClick,
  onFaqClick,
}: HeaderProps) {
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
    } else {
      navigate(-1);
    }
  };

  const handleAlarmClick = () => {
    if (onAlarmClick) {
      onAlarmClick();
    } else {
      navigate("/notifications");
    }
  };

  const handleFaqClick = () => {
    if (onFaqClick) {
      onFaqClick();
    } else {
      navigate("/faq");
    }
  };

  return (
    <header className="w-dvw h-[30px] py-2 mx-auto px-5 flex justify-between items-center max-w-[390px]">
      <div className="flex items-center">
        {showBackButton && (
          <button
            onClick={handleBackClick}
            aria-label="Back"
            className="w-5 h-5 relative aspect-auto flex items-center justify-center cursor-pointer"
          >
            <ArrowLeft />
          </button>
        )}
      </div>

      <h1 className="text-2xl font-bold text-[#CAE4F7]">{title}</h1>

      <div className="flex gap-1 items-center">
        {showAlarmButton && (
          <button
            onClick={handleAlarmClick}
            aria-label="Notifications"
            className="w-5 h-5 relative aspect-auto flex items-center justify-center cursor-pointer"
          >
            <Alarm className="object-cover" />
          </button>
        )}
        {showFaqButton && (
          <button
            onClick={handleFaqClick}
            aria-label="FAQ"
            className="w-5 h-5 relative aspect-auto flex items-center justify-center cursor-pointer"
          >
            <Faq className="object-cover" />
          </button>
        )}
      </div>
    </header>
  );
}
