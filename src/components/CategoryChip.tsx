import { Text, View } from './Themed';

type CategoryChipProps = {
  priority: number;

  category: string;
};

function CategoryChip({ category, priority }: CategoryChipProps) {
  return (
    <View
      style={{
        backgroundColor:
          priority === 1 ? '#EDA80D' : priority === 2 ? '#FFB185' : '#1A72CB',
        marginLeft: 8,
        paddingHorizontal: 12,
        paddingVertical: 2,
        borderRadius: 16,
      }}>
      <Text
        style={{
          color: 'white',
          fontFamily:'Poppins-Light',
          fontSize:12,
        }}>
        {category}
      </Text>
    </View>
  );
}

export default CategoryChip;
