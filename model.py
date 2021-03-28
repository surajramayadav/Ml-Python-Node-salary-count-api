import pickle
import sys
with open('my_model', 'rb') as f:
    model = pickle.load(f)
print(model.predict([[sys.argv[1]]]))
