import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
const names = ["Singh", "Gupta", "Kumar", "Yadav", "Pandey", "Mishra", "Srivastava", "Agarwal", "Sharma", "Verma",
 "Jaiswal", "Tiwari", "Jain", "Rai", "Tripathi", "Khan", "Shukla", "Agrawal", "Dubey", "Rastogi", "Patel", "Maurya", "Reddy", "Saxena", "Kumari", "Chaudhary", "Rathore", "Gautam", "Pal", "Soni", "Dixit", "Pathak", "Meena", "Upadhyay", "Sinha", "Mehrotra", "Dwivedi", "Kushwaha", "Raj", "Aggarwal", "Ali", "Arora", "Saini", "Vishwakarma", "Chaurasia", "Tandon", "Alam", "Sahu", "Bisht", "Chaturvedi", "Bhardwaj", "Goyal", "Tomar", "Ahmad", "Chandra", "Siddiqui", "Chauhan", "Patil", "Ojha", "Kashyap", "Garg", "Choudhary", "Mehra", "Kaur", "Nigam", "Bhatia", "Rana", "Rawat", "Mehta", "Roy", "Bhatt", "Trivedi", "Shah", "Rizvi", "Negi", "Pant", "Gurnani", "Khanna", "Gurubhaiye", "Singhal", "Ansari", "Vaish", "Bajpai", "Anand", "Prasad", "Prakash", "Baranwal", "Kapoor", "Dutta", "Panghal", "Chaudhari", "Mustafa", "Barnwal", "Mathur", "Kesarwani", "Rajput", "Pattnaik", "Prajapati", "Deshmukh", "Azmi", "Chavan", "Misra", "Kaushik", "Khandelwal", "Mittal", "Giri", "Gite", "Goswami", "Narayan", "Krishna", "Nayak", "Maheshwari", "Chaubey", "Rao", "Raza", "Sachan", "Varma", "Quraishi", "Bhadauriya", "Arya", "Thakur", "Porwal", "Chaurasiya", "Awasthi", "Agrahari", "Bansal", "Anwar", "Gurjar", "Rathour", "Jha", "Varshney", "Hasni", "Kulal", "Zope", "Huque", "Madala", "Sonwani", "Bhatnagar", "Kanchapu", "Shinde", "Aenugu", "Jay", "Gudepu", "Sitaram", "Vilas", "Bhaskar", "Wagh", "Waykos", "Wathore", "Tyagi", "Bharadwaj", "Hanif", "Tibrewal", "Vikram", "Yamala", "Suman", "Sura", "Khandekar", "Macharla", "Sugathan", "Narala", "Tayde", "Swamy", "Nadhe", "Suresh", "Banothu", "Agarawal", "Akhtar", "Asthana", "Chary", "Shahi", "Gaur", "Shrivastava", "Chopra", "Dasila", "Yaddanapudi", "Teja", "Bano", "Behuria", "Ahuja", "Chawla", "Tewary", "Seth", "Ranjan", "Keshari", "Sandilya", "Balot", "Balmiki", "Deo", "Kannaujia", "Bhat", "Bhasin", "Ahmed", "Manchanda", "Nanwani", "Dahiya", "Dhiman", "Hanul", "Singam", "Grover", "Bhukya", "Shoaib", "Pawar", "Nag", "Kanojia", "Sagar", "Dutt", "Priyadarshini", "Khare", "Khatoon", "Kukreja", "Mukherjee", "Baghel", "Keshri", "Shivastava", "Dohrey", "Dhindhwal", "Dhamane", "Malwan", "Garud", "Gangwar", "Gaikwad", "Chandran", "Chakma", "Bugalia", "Nadaf", "Desabathula", "Dagade", "Dadarwal", "Khobragade", "Mourya", "Katta", "Kochar", "Mani", "Kori", "Koppula", "Jajoo", "Haokip", "Gutti", "Jivani", "Katiyar", "Karkhele", "Kamble", "Souza", "Vashisth", "Goel", "Hansdah", "Khokhar", "Sikarwar", "Indora", "Bistagond", "Bapna", "Zaidi", "Chahal", "Gill", "Chouhan", "Sutariya", "Singhania", "Solanki", "Ray", "Quadiri", "Bhushan", "Akolkar", "Putta", "Tewari", "Sekhar", "Kothari", "Panesar", "Sonkar", "Pradhan", "Rehman", "Kancharla", "Randhawa", "Raman", "Parashar", "Kasaudhan", "Palata", "Mohandas", "Munir", "Dwevedi", "Mhaske", "Jauhari", "Prabhu", "Priyadarshi", "Malviya", "Pasupuleti", "Malekar", "Mandadi", "Mahawar", "Pareek", "Rakhecha", "Rajendra", "Meghwal", "Nalla", "Shahid", "Shiromani", "Chellani", "Saran", "Sarma", "Sen", "Nandanwar", "Sengar", "Magdum", "Raykar", "Oswal", "Sah", "Jafri", "Rausa", "Sain", "Hasnain", "Wasif", "Afreen", "Barman", "Ataher", "Gond", "Barai", "Athar", "Bais", "Ahamad", "Shrivastav", "Baiswar", "Shivagauri", "Aggrawal", "Chirag", "Chhateja", "Barnawal", "Vaishnavi", "Kalra", "Gakhar", "Chitranshi", "Chowdhury", "Aftab", "Wadhawan", "Vasistha", "Waseem", "Balkoty", "Azam", "Arif", "Sarawagi", "Purwar", "Bhalla", "Sarraf", "Tanu", "Dev", "Sasidharan", "Uppal", "Lakhmani", "Thawani", "Kansal", "Lamba", "Talwar", "Nigan", "Maddeshiya", "Bhriguvanshi", "Malik", "Priya", "Poddar", "Pokhriyal", "Rajesh", "Rauniyar", "Pundir", "Rajak", "Majeed", "Parween", "Nath", "Asija", "Motwani", "Parihar", "Patra", "Anjum", "Pallav", "Sahai", "Aleem", "Aishwary", "Azhar", "Upreti", "Zehra", "Warsi", "Afsar", "Virani", "Srivastav", "Shekhar", 
"Shingh", "Sareen", "Sawlani", "Sirohi", "Sonker", "Anam", "Siraj", "Jawed", "Johari", "Shandilya", "Israni", "Kalsi", "Kanchhal", "Juned", "Kairati", "Gujrati", "Choubey", "Shankdhar", "Chandel", "Chetan", "Dikshit", "Fatima", "Jaitley", "Juneja", "Kasera", "Lockwani", "Mahalka", "Kulsum", "Kwatra", "Malhotra", "Masood", "Rizwan", "Mahmood", "Rungta", "Saluja", "Kewlani", "Sanwal", "Kavi", "Khatri", "Kidwai", "Ruqaiya", "Keshwani", "Chakrabortty", "Durgavanshi", "Bindal", "Bhattacharjee", "Bhattacharya", "Devi", "Dhaka", "Das", "Chhipa", "Darshan", "Belide", "Ganapathy", "Ashraf", "Alwadhi", "Adhaulia", "Adhya", "Bapat", "Behura", "Baliga", "Atri", "Attraa", "Inavolu", "Islam", "Hasija", "Gomashe", "Guduri", "Jushantan", "Kar", "Joseph", "Jagaragallu", "Jose", "Ghosh", "Fathima", "Francis", "Dinu", "Dhaulakhandi", "Dhinoja", "Gayathri", "Gehlot", "Durgavansh", "Gadge", "Gangwal", "Jagtap", "Jeykumaran", "Hosur", "Kushalappa", "Heblikar", "Kulkarni", "Kisshan", "Kasniya", "Machhan", "Sarath", "Jhindal", "Chechani", "Subbapati", "Murlidhar", "Ritikesh", "Iqbal", "Sonawane", "Sankary", "Jodha", "Rishiraj", "Wanve", "Waybhase", "Venkateshwaran", "Theratipally", "Tulshidas", "Parul", "Kishor", "Meharda", "Mahajan", "Lavudya", "Machra", "Nischal", "Omkar"];

// Function to pick a random item from the array
const getRandomName = () => {
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
};

// Example usage
const App = () => {
  const [copiedText, setCopiedText] = useState('');

  const copyToClipboard = (text) => {
    Clipboard.setString(text);
    setCopiedText(`Copied: ${text}`);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'green' }]}
          onPress={() => copyToClipboard(getRandomName())}
        >
          <Text style={styles.buttonText}>Copy Name</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'red' }]}
          onPress={() => copyToClipboard(`${Date.now()}`)}
        >
          <Text style={styles.buttonText}>Copy Time</Text>
        </TouchableOpacity>

        <Text style={styles.copiedText}>{copiedText}</Text>
      </View>
    </SafeAreaView>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: width, // Take full width
    height: height / 2, // Take half of the height
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
  copiedText: {
    marginTop: 10,
    color: 'black',
  },
});

export default App;
