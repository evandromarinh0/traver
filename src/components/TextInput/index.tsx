import { Container, Label, StyledTextInput } from "./styles";

interface TextInputProps {
    label: string;
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
}
export const TextInput: React.FC<TextInputProps> = ({ label, value, onChangeText, placeholder }) => {
    return (
      <Container>
        <Label>{label}</Label>
        <StyledTextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#B0B0B0"
        />
      </Container>
    );
  };