from sentence_transformers import SentenceTransformer, util # type: ignore

Question = "Explain two factors that contributed to the rise of nationalism in Europe during the 19th century."

sentence_1 = '''Industrial Revolution: The Industrial Revolution led to economic growth and a sense of national 
                pride in some European countries. People identified more with their nation's industrial achievements and growing 
                economies. Romanticism: Romanticism, a cultural movement, emphasized national identity, folklore, and shared history. 
                This fostered a sense of national consciousness and a desire for unification among people with similar cultural backgrounds.'''

sentence_2 = '''19th century Europe witnessed a surge in nationalism fueled by two key factors. Firstly, the decline of feudalism 
                with its fragmented loyalties paved the way for strong central governments. This shift fostered a sense of national unity among 
                people who shared a language, history, and culture within newly defined borders. Secondly, the Romantic movement, emphasizing 
                emotions and cultural heritage, led to a rediscovery of national traditions, languages, and heroes. This cultural revival 
                instilled a deep sense of national pride and a desire for self-determination, making people identify more strongly with their 
                nation than ever before.'''

model = SentenceTransformer('sentence-transformers/bert-base-nli-mean-tokens')
embedding_1 = model.encode(sentence_1)
embedding_2 = model.encode(sentence_2)

similarity = util.cos_sim(embedding_1, embedding_2)

print(f"You are this close to the ideal answer: {(similarity.item())*100:.4f}")

