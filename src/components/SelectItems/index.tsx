import {ChevronDown} from 'lucide-react-native';
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import styled from 'styled-components/native';
import {
  Container,
  Dropdown,
  DropdownItem,
  DropdownText,
  Label,
  SelectButton,
  SelectedText,
} from './styles';

type Item = {
  key: string;
  title: string;
};

type Props = {
  label: string;
  items: Item[];
  selectedKey: string;
  onSelect: (key: Item) => void;
};

const SelectItems = ({label, selectedKey, onSelect, items}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedItem = items.find(item => item.key === selectedKey);
  return (
    <Container>
      <Label>{label}</Label>
      <SelectButton onPress={() => setIsOpen(prev => !prev)}>
        <SelectedText>{selectedItem?.title}</SelectedText>
        <ChevronDown size={20} color="#2f2f2f" />
      </SelectButton>
      {isOpen && (
        <Dropdown>
          <FlatList
            data={items}
            keyExtractor={item => item.key}
            renderItem={({item}) => {
              if (item.title === selectedItem?.title) {
                return <></>;
              }
              return (
                <DropdownItem
                  onPress={() => {
                    onSelect(item);
                    setIsOpen(false);
                  }}>
                  <DropdownText>{item.title}</DropdownText>
                </DropdownItem>
              );
            }}
          />
        </Dropdown>
      )}
    </Container>
  );
};

export default SelectItems;
