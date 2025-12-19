# def solution(target, nums = []):
#     for element in nums:
#         for checagem in nums:
#             valor_ate_target = element + checagem
#             if valor_ate_target == target and nums.index(element) != nums.index(checagem):
#                 valor_index1 = nums.index(element)
#                 valor_index2 = nums.index(checagem)
#                 return print("O valor dessa soma se dá a "
#                              f"junção do INDEX: {valor_index1} e INDEX: {valor_index2}")

# solution(9, [1, 6, 3])

# solution(6, [3, 2, 4])

# solution(6, [3, 3])


def TwoSum(target, lista = [], contador = 0, lista_antiga = []):
    lista_de_fato = list(lista)
    lista_antigaParam = list(lista)
    lista_de_fato.sort()
    
    pointer2 = lista_de_fato[-1]
    pointer1 = lista_de_fato[contador]
    # print(f"{pointer1} e {pointer2}")

    if pointer1 + pointer2 < target:
        # print("saiu do primeiro")
        contador += 1
        return TwoSum(target, lista_de_fato, contador, lista_antigaParam)
    elif pointer1 + pointer2 > target:
        # print("removeu ultimo")
        lista_de_fato.pop()
        return TwoSum(target, lista_de_fato, contador, lista_antigaParam)
    
    else:
        if pointer2 == pointer1:
            pointer2 = len(lista_de_fato)-1
            resposta = [lista_antigaParam.index(pointer1), pointer2]
        else:
            resposta = [lista_antigaParam.index(pointer1), lista_antigaParam.index(pointer2)]
        return print(resposta)
    

TwoSum(9, [1, 6, 3])

TwoSum(6, [3, 2, 4])

TwoSum(6, [3, 3])