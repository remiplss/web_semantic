    #!/usr/bin/env python
    # coding: utf-8

    # In[1]:
import pandas as pd
from scipy import sparse
from sklearn.metrics.pairwise import cosine_similarity

def similarity(objectName):
    
    
    # In[4]:


    objects = pd.read_csv('connectedObjects.csv')
    ratings = pd.read_csv('ratings.csv')
    ##ratings = ratings.fillna(0)
    ratings = pd.merge(objects, ratings)
    ratings


    # In[7]:


    user_ratings = ratings.pivot_table(index=['userId'], columns=['name'], values='rating').fillna(0)
    user_ratings


    # In[9]:


    item_similarity_df = user_ratings.corr(method='pearson')
    item_similarity_df


    # In[14]:


    def get_similar_objects(object_name):
        similar_score = item_similarity_df[object_name]
        similar_score = similar_score.sort_values(ascending=False)
        
        return similar_score


    # In[16]:

    similar_objects = pd.DataFrame()

    similar_objects = similar_objects.append(get_similar_objects(objectName), ignore_index=True)
        
    similar_objects.head()
    similar_objects.sum().sort_values(ascending=False)

    return similar_objects

    # In[ ]:




