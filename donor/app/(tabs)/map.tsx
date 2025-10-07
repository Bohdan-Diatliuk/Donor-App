import React from 'react';
import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import { useApi } from '@/hooks/useApi';

export default function Donate() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];
  const { data: centers, loading } = useApi('centers');

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.header}>
        <Ionicons name="heart" size={36} color={theme.tint} />
        <Text style={[styles.title, { color: theme.text }]}>Donate Blood</Text>
      </View>

      <Text style={[styles.subtitle, { color: theme.text }]}>
        Your donation can save lives. Find the nearest donation center below.
      </Text>

      {loading ? (
        <Text style={{ color: theme.text }}>Loading...</Text>
      ) : (
        <FlatList
          data={centers}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={[styles.card, { backgroundColor: theme.tint + '20' }]}>
              <Text style={{ color: theme.text, fontWeight: 'bold', fontSize: 26 }}>{item.name}</Text>
              <Text style={{ color: theme.text }}>{item.address}</Text>
            </View>
          )}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}

      <Pressable
        style={({ pressed }) => [
          styles.button,
          {
            backgroundColor: theme.tint,
            opacity: pressed ? 0.8 : 1,
            transform: pressed ? [{ scale: 0.97 }] : [{ scale: 1 }],
          },
        ]}
        onPress={() => console.log('Donate button pressed')}
      >
        <Text style={styles.buttonText}>Find a Center</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 22,
  },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#161313ff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  card: {
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
  },
});