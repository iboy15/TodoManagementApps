import { FlatList } from 'react-native';
import { useDataTask } from '../../services/dataService';
import TaskCard from '../TaskCard';
import { View } from '../Themed';

const FinishedTab = () => {
  const { finishedData } = useDataTask();
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        contentContainerStyle={{ paddingHorizontal: 16 }}
        style={{ marginTop: 16 }}
        data={finishedData}
        renderItem={({ item }) => {
          return (
            <TaskCard
              detail={item.detail}
              id={item.id}
              title={item.title}
              priority={item.priority}
              category={item.category}
              startTime={item.startTime}
              taskDate={item.taskDate}
              canEdit={false}
            />
          );
        }}
      />
    </View>
  );
};

export default FinishedTab;
