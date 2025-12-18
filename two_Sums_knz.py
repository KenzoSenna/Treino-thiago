def solution(target, nums = []):
    for element in nums:
        for checagem in nums:
            valor_ate_target = element + checagem
            if valor_ate_target == target and nums.index(element) != nums.index(checagem):
                valor_index1 = nums.index(element)
                valor_index2 = nums.index(checagem)
                return print("O valor dessa soma se dá a "
                             f"junção do INDEX: {valor_index1} e INDEX: {valor_index2}")

# solution(9, [1, 6, 3])

# solution(6, [3, 2, 4])

# solution(6, [3, 3])

# utilizando sort e distribuição de ponteiros

def TwoSum(target, lista = [], resposta = []):
    lista_de_fato = list(lista)
    lista_de_fato.sort()
    print(lista_de_fato)
    pointer2 = lista_de_fato[-1]
    for element in lista_de_fato:
        if element + pointer2 < target:
            lista_de_fato.pop(lista_de_fato.index(element))
            print("Sou lindo, funcionou")
            return TwoSum(lista_de_fato, target)

        elif element - pointer2 > target:
            lista_de_fato.pop()
            print("Sou lindo, funcionou")
            return TwoSum(lista_de_fato, target)
        
        else:
            resposta = [element, pointer2]
            return print(resposta)

TwoSum(9, [1, 6, 3])