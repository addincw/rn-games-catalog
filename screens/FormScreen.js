import React from "react";
import {
  StyleSheet,
  Button,
  TextInput,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { Formik } from "formik";
import * as yup from "yup";

import appStyles from "../global/Styles";

const validationSchema = yup.object({
  title: yup.string().required().min(4),
  rate: yup
    .string()
    .required()
    .test(
      "check-number-in-range",
      "rate must be a number between 1-5",
      (value) => parseInt(value) < 6 && parseInt(value) > 0
    ),
});

function FormScreen({ addGame }) {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ title: "", rate: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, action) => {
          action.resetForm();
          addGame(values);
        }}
      >
        {(props) => (
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{ flex: 1 }}>
              <View style={appStyles.inputGroup}>
                <TextInput
                  style={{ ...appStyles.text, ...appStyles.input }}
                  placeholder="Game Title"
                  value={props.values.title}
                  onChangeText={props.handleChange("title")}
                  onBlur={props.handleBlur("title")}
                />
                <Text style={appStyles.textDanger}>
                  {props.touched.title && props.errors.title}
                </Text>
              </View>

              <View style={appStyles.inputGroup}>
                <TextInput
                  keyboardType="numeric"
                  style={{ ...appStyles.text, ...appStyles.input }}
                  placeholder="Game Rating (1 - 5)"
                  value={props.values.rate}
                  onChangeText={props.handleChange("rate")}
                  onBlur={props.handleBlur("rate")}
                />
                <Text style={appStyles.textDanger}>
                  {props.touched.rate && props.errors.rate}
                </Text>
              </View>
              <Button
                title="submit"
                color="red"
                onPress={() => props.handleSubmit()}
              />
            </View>
          </TouchableWithoutFeedback>
        )}
      </Formik>
    </View>
  );
}

export default FormScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 55,
    paddingHorizontal: 15,
  },
});
