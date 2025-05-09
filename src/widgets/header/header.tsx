import { useNavigate } from "react-router";
import ArrowLeft from "../../assets/arrowLeft.svg?react";

type HeaderProps = {
  title: string;
  showBackButton?: boolean;
  showAlarmButton?: boolean;
  showFaqButton?: boolean;
  onBackClick?: () => void;
  onAlarmClick?: () => void;
  onFaqClick?: () => void;
};

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
            className="w-[10px] h-5 relative aspect-auto"
          >
            <ArrowLeft />
          </button>
        )}
      </div>

      <h1 className="text-2xl font-bold text-[#CAE4F7]">{title}</h1>

      <div>
        {showAlarmButton && (
          <button onClick={handleAlarmClick} aria-label="Notifications">
            🔔
          </button>
        )}
        {showFaqButton && (
          <button onClick={handleFaqClick} aria-label="FAQ">
            ❓
          </button>
        )}
      </div>
    </header>
  );
}
