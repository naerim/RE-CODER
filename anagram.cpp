#include <iostream>
#include <string>
using namespace std;

bool isAnagram(const string& s1, const string& s2);

void stringSort(string &s) {

	for (int i = 0; i < s.length(); i++) {

		char currentMin = s[i];
		int currentMinIndex = i;

		for (int j = i + 1; j < s.length(); j++) {

			if (currentMin > s[j]) {
				currentMin = s[j];
				currentMinIndex = j;
			}
		}

		if (currentMinIndex != i) {
			s[currentMinIndex] = s[i];
			s[i] = currentMin;
		}

	}
}

int main() {

	string s1 = "silent";
	string s2 = "listen";

	/*cout << "===============================================" << endl;
	cout << "<Excercise 10-1>" << endl;

	cout << s1 << " and " << s2;
	if (isAnagram(s1, s2) == true) cout << " are anagrams" << endl;
	else cout << " are not anagrams" << endl;

	s1 = "split";
	s2 = "lisp";

	cout << s1 << " and " << s2;
	if (isAnagram(s1, s2) == true) cout << " are anagrams" << endl;
	else cout << " are not anagrams" << endl;*/

	cout << "Enter a string s1: ";
	cin >> s1;

	cout << "Enter a string s2: ";
	cin >> s2;

	cout << s1 << " and " << s2;
	if (isAnagram(s1, s2) == true) cout << " are anagrams" << endl;
	else cout << " are not anagrams" << endl;

	return 0;
}

bool isAnagram(const string& s1,const string& s2) {

	string s = s1;
	string ss = s2;

	if (s.length() != ss.length()) return false;
	else {

		int cnt = 0;
		stringSort(s);
		stringSort(ss);

		for (int i = 0; i < s.length(); i++) {
			if (s[i] == ss[i]) cnt++;
		}

		if (cnt == s.length()) return true;
	}

	return 0;
}
