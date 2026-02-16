import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCart } from "@/context/CartContext";
import { router } from "expo-router";

export default function PaymentScreen() {
  const { cart, clearCart } = useCart();
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  const totalPrice = cart.reduce(
    (sum, item) => sum + Number(item.price),
    0
  );

  const handlePayment = () => {
    if (!selectedMethod) {
      Alert.alert("Please select a payment method");
      return;
    }

    // Simulate payment success
    clearCart();
    router.replace("/order-success");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Select Payment Method</Text>

      {/* ---------- PAYMENT OPTIONS ---------- */}
      <Pressable
        style={[
          styles.option,
          selectedMethod === "upi" && styles.selected,
        ]}
        onPress={() => setSelectedMethod("upi")}
      >
        <Text style={styles.optionText}>UPI</Text>
      </Pressable>

      <Pressable
        style={[
          styles.option,
          selectedMethod === "card" && styles.selected,
        ]}
        onPress={() => setSelectedMethod("card")}
      >
        <Text style={styles.optionText}>Credit / Debit Card</Text>
      </Pressable>

      <Pressable
        style={[
          styles.option,
          selectedMethod === "cod" && styles.selected,
        ]}
        onPress={() => setSelectedMethod("cod")}
      >
        <Text style={styles.optionText}>Cash on Delivery</Text>
      </Pressable>

      {/* ---------- TOTAL ---------- */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total Amount</Text>
        <Text style={styles.totalAmount}>₹{totalPrice}</Text>
      </View>

      {/* ---------- PAY BUTTON ---------- */}
      <Pressable style={styles.payButton} onPress={handlePayment}>
        <Text style={styles.payText}>
          Pay ₹{totalPrice}
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  option: {
    padding: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    marginBottom: 15,
  },
  selected: {
    borderColor: "#000",
    backgroundColor: "#f2f2f2",
  },
  optionText: {
    fontSize: 16,
  },
  totalContainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  totalText: {
    fontSize: 16,
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: "bold",
  },
  payButton: {
    marginTop: 30,
    backgroundColor: "#000",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  payText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCart } from "@/context/CartContext";
import { router } from "expo-router";

export default function PaymentScreen() {
  const { cart, clearCart } = useCart();
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  const totalPrice = cart.reduce(
    (sum, item) => sum + Number(item.price),
    0
  );

  const handlePayment = () => {
    if (!selectedMethod) {
      Alert.alert("Please select a payment method");
      return;
    }

    // Simulate payment success
    clearCart();
    router.replace("/order-success");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Select Payment Method</Text>

      {/* ---------- PAYMENT OPTIONS ---------- */}
      <Pressable
        style={[
          styles.option,
          selectedMethod === "upi" && styles.selected,
        ]}
        onPress={() => setSelectedMethod("upi")}
      >
        <Text style={styles.optionText}>UPI</Text>
      </Pressable>

      <Pressable
        style={[
          styles.option,
          selectedMethod === "card" && styles.selected,
        ]}
        onPress={() => setSelectedMethod("card")}
      >
        <Text style={styles.optionText}>Credit / Debit Card</Text>
      </Pressable>

      <Pressable
        style={[
          styles.option,
          selectedMethod === "cod" && styles.selected,
        ]}
        onPress={() => setSelectedMethod("cod")}
      >
        <Text style={styles.optionText}>Cash on Delivery</Text>
      </Pressable>

      {/* ---------- TOTAL ---------- */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total Amount</Text>
        <Text style={styles.totalAmount}>₹{totalPrice}</Text>
      </View>

      {/* ---------- PAY BUTTON ---------- */}
      <Pressable style={styles.payButton} onPress={handlePayment}>
        <Text style={styles.payText}>
          Pay ₹{totalPrice}
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  option: {
    padding: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    marginBottom: 15,
  },
  selected: {
    borderColor: "#000",
    backgroundColor: "#f2f2f2",
  },
  optionText: {
    fontSize: 16,
  },
  totalContainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  totalText: {
    fontSize: 16,
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: "bold",
  },
  payButton: {
    marginTop: 30,
    backgroundColor: "#000",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  payText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
