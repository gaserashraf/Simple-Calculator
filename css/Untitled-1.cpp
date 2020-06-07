#include<iostream>
#include<algorithm>
#include<vector>
#include <bitset>
#include <complex>
#include <deque>
#include <exception>
#include <fstream>
#include <functional>
#include <iomanip>
#include <ios>
#include <iosfwd>
#include <iostream>
#include <istream>
#include <iterator>
#include <limits>
#include <list>
#include <locale>
#include <map>
#include <memory>
#include <new>
#include <numeric>
#include <ostream>
#include <queue>
#include <set>
#include <sstream>
#include <stack>
#include <stdexcept>
#include <streambuf>
#include <string>
#include <typeinfo>
#include <utility>
#include <valarray>
#include <vector>
using namespace std;
#define ll long long 
#define vbe(v) ((v).begin()), ((v).end())
ll GCD(ll a, ll b) { return (a) ? GCD(b % a, a) : b; }
ll LCM(ll a, ll b) { return a * b / GCD(a, b); }
ll fastpow(ll b, ll p) { if (!p) return 1; ll ret = fastpow(b, p >> 1); ret *= ret; if (p & 1) ret *= b; return ret; }
string alpha = "abcdefghijklmnopqrstuvwxyz";
int main()
{
    int s;
    cin >>s;
    while (s--)
    {
        int n;
        cin>>n;
        vector<int>a(n);
        vector<int>b(n);
        for(int i=0;i<n;i++)
            cin>>a[i];
        for(int i=0;i<n;i++)
            cin>>b[i];
        if(a==b)
            cout<<"YES";
        else
        {
            int l=-1,r=-1,k=-1;
            int def=-1;
            bool ex=0;
            for(int i=0;i<n;i++)
            {
                if(a[i]!=b[i]&&l==-1)
                    l=i;
                else if(a[i]!=b[i]&&l!=-1)
                {
                    if(def==-1)
                        def=abs(a[i]-b[i]);
                    else
                    {
                        if(def!=abs(a[i]-b[i]))
                        {
                            ex=1;
                            break;
                        }
                    }
                }
                else if(a[i]==b[i]&&l!=-1&&r==-1)
                    r=i;
                else if(a[i]!=b[i]&&l!=-1)
                {
                    ex=1;
                    break;
                }
            }
            if(ex)
                cout<<"NO";
            else
            `   cout<<"YES";
        }
        cout<<endl;
            
    }
    
}