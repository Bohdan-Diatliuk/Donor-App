import * as React from 'react';
import { View } from 'react-native';
import { Button, Card, Text, TextInput } from 'react-native-paper';

export default function HomeScreen() {
  const [name, setName] = React.useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Card style={{ marginBottom: 20 }}>
        <Card.Content>
          <Text variant="titleLarge">Donor App</Text>
          <Text variant="bodyMedium">Введи своє ім’я:</Text>
          <TextInput
            label="Ім’я"
            value={name}
            onChangeText={setName}
            style={{ marginTop: 10 }}
          />
        </Card.Content>
      </Card>

      <Button
        mode="contained"
        onPress={() => console.log('Hello, ' + name)}
      >
        Зареєструвати
      </Button>
    </View>
  );
}
