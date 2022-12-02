using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;

namespace egzamin5
{
    public partial class MainPage : ContentPage
    {
        Random rand = new Random();
        static int[] tabToSort = new int[10];
        static int[] sortedTab = new int[10];
        public MainPage()
        {
            InitializeComponent();
        }
        private int[] BubbleSort(int[] tab)
        {
            stepsAmount.Text = string.Empty;
            int n = tab.Length;
            do
            {
                for (int i = 0; i < n - 1; i++)
                {
                    if (tab[i] > tab[i + 1])
                    {
                        int tmp = tab[i];
                        tab[i] = tab[i + 1];
                        tab[i + 1] = tmp;
                    }
                }
                n--;
                for (int j = 0; j < 10; j++)
                {
                    stepsAmount.Text += tab[j].ToString() + " ";
                }
                stepsAmount.Text += "\n \n";
            }
            while (n > 1);
            return tab;
        }

        private void createTable_Clicked(object sender, EventArgs e)
        {
            viewRandomTab.Text = string.Empty;
            for (int i = 0; i < tabToSort.Length; i++)
            {
                tabToSort[i] = rand.Next(1, 100);
                viewRandomTab.Text += tabToSort[i].ToString() +  " ";

            }
            createTable.IsEnabled = true;
        }

        private void sortTable_Clicked(object sender, EventArgs e)
        {
            viewSortedTab.Text = string.Empty;
            sortedTab = BubbleSort(tabToSort);

            for (int i = 0; i < sortedTab.Length; i++)
            {
                viewSortedTab.Text += sortedTab[i].ToString() + " ";
            }
        }

        
    }
}
