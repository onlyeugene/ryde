import { ButtonProps } from "@/types/types";
import { Text, TouchableOpacity } from "react-native";

// interface Props {
//   children: React.ReactNode;
//   onPress: () => void;
//   title: string;
//   bgVariant: "primary" | "secondary";
//   textVariant: "default" | "secondary";
//   IconLeft: React.ReactElement;
//   IconRight: React.ReactElement;
//   className: string;
// }

const getBgVariantStyle = (variant: ButtonProps["bgVariant"]) => {
  switch (variant) {
    case "secondary":
      return "bg-gray-500";
    case "danger":
      return "bg-red-500";
    case "success":
      return "bg-green-500";
    case "outline":
      return "bg-transparent border-neutral-300 border-[0.5px]";
    default:
      return "bg-[#0286ff]";
  }
};
const getTextVariantStyle = (variant: ButtonProps["textVariant"]) => {
  switch (variant) {
    case "primary":
      return "text-black";
    case "secondary":
      return "text-gray-100";
    case "danger":
      return "text-red-100";
    case "success":
      return "text-green-100";
    default:
      return "text-white";
  }
};

const CustomButton: React.FC<ButtonProps> = ({
  //   children,
  onPress,
  title,
  bgVariant = "primary",
  textVariant = "default",
  IconLeft,
  IconRight,
  className,
  ...props
}) => (
  <TouchableOpacity
    onPress={onPress}
    className={`w-full rounded-md flex flex-row justify-center items-center shadow-md shadow-neutral-400/70 ${getBgVariantStyle(bgVariant)}  ${className}`}
    {...props}
  >
    {IconLeft && <IconLeft />}
    <Text className={`text-lg font-bold ${getTextVariantStyle(textVariant)}`}>
      {title}
    </Text>
    {IconRight && <IconRight />}
  </TouchableOpacity>
);

export default CustomButton;
