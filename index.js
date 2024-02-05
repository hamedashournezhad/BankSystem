const h1 = document.createElement("h1");
const p = document.createElement("p");
const ul = document.createElement("ul");
const li = document.createElement("li");
const select = document.createElement("select");
const button = document.createElement("button");

class MainController {
    MenuItems = [
        "Account",
        "Withdraw",
        "Log-out!"
    ];
    AccountMenuItems = [
        "Enable Password",
        "Change Password",
        "Delete Account"
    ];
    SelectedMenu = "";
    Account = () => {
        if (localStorage.getItem("username") != null) {
            h1.textContent = h1.innerText = "Hello " + localStorage.getItem("username") + "!";
            for (let i = 0; i < this.MenuItems.length; i++) {
                const option = document.createElement("option");
                option.value = `${this.MenuItems[i]}`;
                option.text = `${this.MenuItems[i]}`;
                select.append(option);
            }
            p.innerText = "Menus: ";
            document.body.append(h1);
            document.body.append(p);
            document.body.append(select);
            button.innerText = "Select";
            button.addEventListener("click", () => {
                switch (select.value) {
                    case "Account":
                        this.ClearBodyElements();
                        this.AccountManagement();
                        break;
                    case "Withdraw":
                        this.SelectedMenu = "Withdraw";
                        console.log(this.SelectedMenu);
                        break;
                    case "Log-out!":
                        this.Logout();
                        break;
                    default:
                        break;
                };
            });

            document.body.append(button);
        } else {
            let Username = String(prompt("Please enter your username: "));
            if (Username == null || Username == "" || Username == "null") {
                h1.innerText = "Sorry, The Username input cannot be null or empty!";
                document.body.appendChild(h1);
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            } else {
                localStorage.setItem("username", Username);
                window.location.reload();
            }


        }
    }

    Withdraw = () => {

    }


    // Functions
    ClearBodyElements = () => {
        document.body.querySelectorAll("*").forEach((e) => {
            e.remove();
        });
    }

    AccountManagement = () => {
        h1.innerText = "Account Management";
        for (let i = 0; i < this.AccountMenuItems.length; i++) {
            const option = document.createElement("option");
            option.value = `${this.AccountMenuItems[i]}`;
            option.text = `${this.AccountMenuItems[i]}`;
            select.append(option);
        }
        ul.classList.add("list-number");
        document.body.appendChild(h1);
        document.body.appendChild(ul);
        document.body.appendChild(select);
        button.innerText = "Use!";
        document.body.appendChild(button);
        button.addEventListener("click", () => {
            switch (select.selectedIndex) {
                case 0:
                    // Delete Account
                    break;
                case 1:
                    // Delete Account
                    break;
                case 2:
                    this.Logout();
                    break;
            }
        });
    }

    Logout = () => {
        // Delete Account
        localStorage.removeItem("username");
        window.location.reload();
    }
};

const RunApp = new MainController();
RunApp.Account();