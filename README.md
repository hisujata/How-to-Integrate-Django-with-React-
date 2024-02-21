In this project I explained how to integrate your react app with django for full stcack development.

Dependencies that you need python 3.10, vs.code and pip.

You need to pay attention to below points while downloading python otherwise you will get errors. Tick all the checkboxes before cliking install now.

1. Install launcher for all users
2. add version to path by default it will be disable 

While installing vs.code similar to pything you need to unable all the checkboxes while downloding 


Now that we have the dependencies lets get the virtual environment ready for django. Create a directory in your local and open the directory in vs code.
You need to give below commands to get the vitual environment ready.

Commands:

    python -m venv myenv

    cd myenv\Scripts

    .\activate

Once the environment is ready we need install django by giving below command. It will create  a new directory to run the backend server.

Commands:

    pip install django

    django-admin startproject myroject

    cd myproject

Startproject will create a directory and we have name the directory myapp you can anything you like.

next you need run the server and chek if evrything is fine to do so you need below commands. Make sure you run this command in base directory of django where manage.py file is located. 
To check if file is there or not you can use ls command. ls command will show all the files and folder in the directory. 

python manage.py runserver

You will see an link on your terminal window once the server is ready.
Follow the link and it will open in default beouser or you can copy the link and paste in brouser of your choice.

<img src="https://github.com/hisujata/How-to-Integrate-Django-with-React-/blob/master/django.png">

Yeee its ready! 
 
Lets move forward and get our react app ready. Most important point. Dont use the same terminal window as our backend server is running here. 
Open new terminal window in vs.code instaed.

Ok now we need to create a react app in the base directory where you have your django server. In my case its "django".
If you gave diffrent name then please use that.

I alredy created a detailed documentation on how to install react app in local machine. You can check that here. 

[React-Setup Repository](https://github.com/hisujata/React-Setup)
 

It will take some time. We all know react uses single html file to manipulate dom to render UI components. 
So till the app is getting reday lets do changes in our pythons files which are located in myproject. To bind our backend with fronted. 

First thing open setings.py in vs code and here tt the top of the file to import os from manage.py. Just copy paste the below line in your setting.py.

    import os 

Next scroll down and come to templates section and inside 'DIRS' put below line of code to point html in here. In my case my react code recides in frontend directort inside which there will be build directory.

        'DIRS': [
                    os.path.join(BASE_DIR, 'frontend/build')
                ],

Dont get confused if you dont see the build directory yet. We will get it once we build the react code.

Next create views.py inside the root folder of django in my case its myproject.
Just copy past the below code in views.py.

        from django.shortcuts import render

                def index(request):
            r       eturn render(request, 'index.html') 
	
	
	
Next we need to do some changes in urls.py. Add below line of code to import function we just created in view.py .

from .views import index 

and inside urlpatterns add belwo code its empty route to call index fuction from view.py.

        path('', index), 


After that run npm build to build the application at this stage you will get build folder in react app that you created in my case its frontend.

Now the last step. 

In settings.py at the end just put belwo line of code. This will serve the static files from build directory.

        STATICFILES_DIRS = [
                    os.path.join(BASE_DIR, 'frontend/build/static')
                        ]

And you are all set. Now you can start writing your code. In my project I have smaple bootstrap code with very basic styling. 
Now every time you make some changes you will have to run npm build and after that refresh the brouser to see the changes.

<img src="https://github.com/hisujata/How-to-Integrate-Django-with-React-/blob/master/reactapp.png">

If you want to configure a databse you will have to configure it in settings.py in databse section.
